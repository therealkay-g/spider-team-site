import { Vector3, Euler } from 'three';

export type SceneState = 'HERO' | 'ABOUT' | 'SERVICES' | 'PROJECTS' | 'TEAM' | 'CONTACT' | 'FINAL';

interface SceneConfig {
  cameraPos: Vector3;
  cameraRot: Euler;
  objectPos: Vector3;
  objectRot: Euler;
  objectScale: number;
  lightColor: string;
  particleDensity: number;
  startProgress: number;
  endProgress: number;
  // Morphing properties for a cinematic feel
  morphIntensity: number;
  morphFrequency: number;
  morphSpeed: number;
}

export const SCENE_CONFIG: Record<SceneState, SceneConfig> = {
  HERO: {
    cameraPos: new Vector3(0, 0, 5),
    cameraRot: new Euler(0, 0, 0),
    objectPos: new Vector3(0, 0, 0),
    objectRot: new Euler(0, 0, 0),
    objectScale: 1,
    lightColor: '#00f2ff',
    particleDensity: 2000,
    startProgress: 0,
    endProgress: 0.15,
    morphIntensity: 0.2,
    morphFrequency: 1.0,
    morphSpeed: 0.5,
  },
  ABOUT: {
    cameraPos: new Vector3(2, 1, 3),
    cameraRot: new Euler(0, Math.PI / 4, 0),
    objectPos: new Vector3(-1, 0, 0),
    objectRot: new Euler(0, Math.PI / 2, 0),
    objectScale: 1.2,
    lightColor: '#ffffff',
    particleDensity: 1500,
    startProgress: 0.15,
    endProgress: 0.30,
    morphIntensity: 0.5,
    morphFrequency: 2.0,
    morphSpeed: 0.8,
  },
  SERVICES: {
    cameraPos: new Vector3(0, 2, 4),
    cameraRot: new Euler(-Math.PI / 6, 0, 0),
    objectPos: new Vector3(0, -1, 0),
    objectRot: new Euler(Math.PI / 4, 0, 0),
    objectScale: 0.8,
    lightColor: '#00f2ff',
    particleDensity: 3000,
    startProgress: 0.30,
    endProgress: 0.45,
    morphIntensity: 0.8,
    morphFrequency: 4.0,
    morphSpeed: 1.2,
  },
  PROJECTS: {
    cameraPos: new Vector3(-3, 0, 2),
    cameraRot: new Euler(0, -Math.PI / 4, 0),
    objectPos: new Vector3(1, 0, 0),
    objectRot: new Euler(0, 0, Math.PI / 4),
    objectScale: 1.5,
    lightColor: '#ff00f2',
    particleDensity: 1000,
    startProgress: 0.45,
    endProgress: 0.60,
    morphIntensity: 0.3,
    morphFrequency: 1.5,
    morphSpeed: 0.6,
  },
  TEAM: {
    cameraPos: new Vector3(0, -1, 5),
    cameraRot: new Euler(Math.PI / 8, 0, 0),
    objectPos: new Vector3(0, 1, 0),
    objectRot: new Euler(Math.PI / 2, Math.PI / 2, 0),
    objectScale: 1.1,
    lightColor: '#ffffff',
    particleDensity: 2000,
    startProgress: 0.60,
    endProgress: 0.75,
    morphIntensity: 0.4,
    morphFrequency: 2.5,
    morphSpeed: 0.7,
  },
  CONTACT: {
    cameraPos: new Vector3(0, 0, 8),
    cameraRot: new Euler(0, 0, 0),
    objectPos: new Vector3(0, 0, -2),
    objectRot: new Euler(0, 0, 0),
    objectScale: 1,
    lightColor: '#00f2ff',
    particleDensity: 4000,
    startProgress: 0.75,
    endProgress: 0.90,
    morphIntensity: 0.1,
    morphFrequency: 0.5,
    morphSpeed: 0.3,
  },
  FINAL: {
    cameraPos: new Vector3(0, 0, 10),
    cameraRot: new Euler(0, 0, 0),
    objectPos: new Vector3(0, 0, 0),
    objectRot: new Euler(0, 0, 0),
    objectScale: 0.5,
    lightColor: '#ffffff',
    particleDensity: 5000,
    startProgress: 0.90,
    endProgress: 1.0,
    morphIntensity: 0.0,
    morphFrequency: 0.0,
    morphSpeed: 0.0,
  },
};
