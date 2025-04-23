import Img1 from "../assets/Images/BrightNight/1.jpg";
import Img2 from "../assets/Images/BrightNight/2.jpg";
import Img3 from "../assets/Images/BrightNight/3.jpg";

export interface achievementItems {
  year: string;
  title: string;
  event: string;
  role: string;
  team: string;
  project: string;
  technologies: string[];
  summary: string;
  github?: string;
  video?: string;
  images: string[];
  organization: string;
}

export const achievements: achievementItems[] = [
  {
    year: "2021",
    title: "Winner",
    event: "IOT Expo",
    role: "Team Lead & Developer",
    team: "BrightNight",
    project: "Smart Glasses for the Visually Impaired",
    technologies: ["Python", "OpenCV2", "TensorFlow", "HoughLinesP"],
    summary:
      "Built smart glasses with object detection, face recognition, location tracking, and stair detection to aid visually impaired individuals. Led hardware-software integration and deployed on embedded Linux.",
    github: "https://github.com/ojasggg/2021_IOT_Expo_Projects.git",
    video: "https://youtu.be/GX_AfxdekKQ",
    images: [Img2, Img1, Img3],
    organization: "Coventry University (Softwarica College)",
  },
];
