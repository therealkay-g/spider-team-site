import { create } from 'zustand';

export type SceneState = 'HERO' | 'ABOUT' | 'SERVICES' | 'PROJECTS' | 'TEAM' | 'CONTACT' | 'FINAL';

interface MotionState {
  scrollProgress: number;
  currentScene: SceneState;
  mouse: { x: number; y: number };
  smoothMouse: { x: number; y: number };
  isLoading: boolean;
  quality: 'low' | 'medium' | 'high';
  isMuted: boolean;

  // Actions
  setScrollProgress: (progress: number) => void;
  setMouse: (x: number, y: number) => void;
  updateSmoothMouse: (x: number, y: number) => void;
  setCurrentScene: (scene: SceneState) => void;
  setLoading: (loading: boolean) => void;
  setQuality: (quality: 'low' | 'medium' | 'high') => void;
  setMuted: (muted: boolean) => void;
}

export const useMotionDirector = create<MotionState>((set) => ({
  scrollProgress: 0,
  currentScene: 'HERO',
  mouse: { x: 0, y: 0 },
  smoothMouse: { x: 0, y: 0 },
  isLoading: true,
  quality: 'high',
  isMuted: true,

  setScrollProgress: (val: number) => set({ ["scrollProgress"]: val }),
  setMouse: (x, y) => set({ mouse: { x, y } }),
  updateSmoothMouse: (x, y) => set({ smoothMouse: { x, y } }),
  setCurrentScene: (scene) => set({ currentScene: scene }),
  setLoading: (loading) => set({ isLoading: loading }),
  setQuality: (quality) => set({ quality }),
  setMuted: (muted) => set({ isMuted: muted }),
}));
