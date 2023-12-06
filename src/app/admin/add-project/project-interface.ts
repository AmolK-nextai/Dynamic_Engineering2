import { category } from "../category/category-interface";

export interface Project {
  id: number;
  projectName: string;
  description: string;
  projectImage: string[]; // Assuming that the projectImage is an array of image URLs or file paths
  projectCategoryId: number;
  projectCategory?:category
}
