# Implementation Plan: CINEMATIC 3D EXPERIENCE ENGINE

This document outlines the transformation of the current website into a unified, immersive 3D experience.

## 1. Architecture Overview

The architecture will shift from a "Page-based" 3D approach (standalone scenes) to a "World-based" approach where the camera traverses a single 3D environment.

### Proposed Directory Structure
```text
src/
├── components/
│   ├── 3d/
│   │   ├── World/              # Main world entry point
│   │   │   ├── Experience.tsx  # The <Canvas> and global 3D setup
│   │   │   ├── SceneManager.tsx# Coordinates object visibility/state
│   │   │   └── Environment.tsx# Lighting, Fog, Sky
│   │   ├── Objects/            # Morphable and static 3D assets
│   │   │   ├── MorphObject.tsx # The central transforming mesh
│   │   │   └── Particles.tsx   # Interactive particle network
│   │   └── Camera/
│   │       └── CinematicCamera.tsx # Lerping camera logic
│   ├── motion/                 # Motion orchestration
│   │   ├── MotionDirector.ts   # Zustand store for global state
│   │   └── lerpUtils.ts        # Mathematical helpers for smoothing
│   ├── shaders/                # GLSL code
│   │   ├── morph.vert / .frag  # Morphing object shaders
│   │   └── particles.vert / .frag # Particle network shaders
│   └── config/
│       └── sceneConfig.ts      # Coordinates, rotations, and timings for sections
```

## 2. Motion Director (The Brain)

To avoid React render bottlenecks in the 60fps R3F loop, we will use **Zustand**.

### State Definition (`motion/MotionDirector.ts`)
- `scrollProgress`: Float (0 to 1) - The master driver.
- `currentScene`: Enum (HERO, ABOUT, SERVICES, PROJECTS, TEAM, CONTACT).
- `targetCamera`: `{ position: Vector3, rotation: Euler }`.
- `morphValue`: Float (0 to 1) - Transitions between shapes.
- `quality`: Enum (LOW, MEDIUM, HIGH).

### Coordination Logic
- **Lenis $\rightarrow$ Zustand**: A `SmoothScroll` wrapper will update `scrollProgress` on every frame using the Lenis `onScroll` callback.
- **Zustand $\rightarrow$ R3F**: Components will use `useFrame` to read the store and apply `lerp` or `spring` transformations to 3D objects.

## 3. Cinematic Camera System

Instead of jumping between scenes, the camera will glide.

### Mathematical Approach
1. **Scene Mapping**: `sceneConfig.ts` defines targets for each section.
   ```ts
   export const SCENE_CONFIG = {
     HERO: { pos: [0, 0, 10], rot: [0, 0, 0], range: [0, 0.2] },
     ABOUT: { pos: [5, 2, 5], rot: [0, 0.5, 0], range: [0.2, 0.4] },
     // ...
   }
   ```
2. **Interpolation**:
   - Identify the current active scene based on `scrollProgress`.
   - Calculate a `localProgress` (0 to 1) between the current and next scene.
   - Use `Vector3.lerp` for position and `Quaternion.slerp` for rotation.
   - Apply a damping factor (e.g., `0.1`) in the `useFrame` loop for that "weighted" cinematic feel.
   - **Mouse Influence**: Add a slight offset to the target position based on mouse coordinates for parallax.

## 4. Object Morphing & Particle Network

### The Morphing Object
- **Implementation**: A high-poly sphere or custom geometry.
- **Technique**: Vertex displacement in GLSL.
- **Morphing**: Use a noise function (Simplex/Perlin) combined with a `uMorphProgress` uniform. As the user scrolls from HERO to ABOUT, `uMorphProgress` shifts, changing the noise frequency and amplitude to transform the object's silhouette.

### The Particle Network
- **Implementation**: `instancedMesh` or a custom `Points` object.
- **Interaction**:
  - **Mouse**: Particles are pushed away from the `uMouse` position in the vertex shader.
  - **Scroll**: Particles expand/contract or change color based on `scrollProgress`.
  - **Transitions**: During scene changes, particles can "swarm" toward the next target coordinate.

## 5. HTML Sync & Entrance Experience

### UI Integration
- UI elements (text, buttons) will be wrapped in `framer-motion` components.
- Visibility will be tied to `scrollProgress`.
- Example: `opacity = Math.max(0, 1 - Math.abs(scrollProgress - SCENE_CONFIG.ABOUT.midpoint) * 10)`.

### The Entrance Sequence
1. **Loader**: A cinematic black screen with a percentage loader.
2. **The Reveal**:
   - Camera zooms from a distance into the center of the world.
   - The Morphing Object "assembles" itself from particles.
   - The Hero text fades in with a subtle stagger.
   - All movements use an `expo.out` easing function.

## 6. Implementation Sequence

### Phase 1: Infrastructure
1. Create the directory structure.
2. Implement `MotionDirector` (Zustand).
3. Set up the global `<Canvas>` in `Experience.tsx`.
4. Integrate Lenis to feed `scrollProgress` into the store.

### Phase 2: Camera & World
1. Define `sceneConfig.ts` with 3D coordinates for all current sections.
2. Implement `CinematicCamera.tsx` with lerping logic.
3. Map existing HTML sections to these coordinates.

### Phase 3: Visual Engine
1. Develop the `MorphObject` with GLSL shaders.
2. Implement the `ParticleNetwork`.
3. Create the `Environment` (lighting/fog).

### Phase 4: Polish & Sync
1. Sync HTML UI visibility with `scrollProgress`.
2. Implement the Entrance Experience sequence.
3. Add adaptive quality settings (reducing particle count for LOW quality).

## 7. Verification Strategy

| Metric | Target | Verification Method |
| :--- | :--- | :--- |
| **Performance** | 60 FPS stable | Chrome DevTools Performance tab / R3F `Stats` component |
| **Motion Fluidity** | Zero jitters | Visual check for "stutter" during fast scroll; verify lerp damping |
| **Transitions** | Seamless | Ensure no "pops" when crossing `scrollProgress` thresholds |
| **Responsiveness** | < 100ms | Measure lag between mouse move and particle reaction |
| **Accessibility** | Compliant | Verify `prefers-reduced-motion` disables camera lerping/morphing |

### Critical Files for Implementation
- `src/components/motion/MotionDirector.ts`
- `src/components/3d/Camera/CinematicCamera.tsx`
- `src/components/config/sceneConfig.ts`
- `src/components/3d/Objects/MorphObject.tsx`
- `src/components/3d/World/Experience.tsx`
EOF`
