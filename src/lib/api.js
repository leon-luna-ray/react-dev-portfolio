import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-04-08',
});

const builder = imageUrlBuilder(client);

export function getImageUrl(source) {
  return builder.image(source);
}

export async function fetchGlobal() {
  const query = `*[_type == "globalSettings"]`;
  const global = await client.fetch(query);

  return global;
}

export async function fetchFeaturedProjects() {
  const query = `*[_type == "project" && featured] | order(_updatedAt desc) {
      _id,
      intro,
      description,
      mainImage,
      slug,
      status,
      title,
    }`;
  const projects = await client.fetch(query);

  return projects;
}

export async function fetchProfile() {
  const query = `*[_type == "profileDetails"][0]`;
  const profile = await client.fetch(query);

  return profile;
}

export async function fetchHobbies() {
  const query = `*[_type == "profileDetails"][0] { "hobbies" : hobbies[] -> {title} }`;
  const hobbies = await client.fetch(query);

  return hobbies;
}

export async function fetchSkills() {
  const query = `*[_type == "skillsList"] | order(title) {title, "skills" : skills[] -> {title, website}}`;
  const skills = await client.fetch(query);

  return skills;
}
