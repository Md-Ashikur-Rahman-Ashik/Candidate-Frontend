export interface ProfileData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
}


export const candidateData: ProfileData = {
  title: "Meet Your Candidate",
  description:
    "A passionate advocate for progress, dedicated to serving our community with integrity and a fresh perspective. Our candidate is ready to lead us toward a brighter future.",
  buttonText: "Discover My Story",
  buttonLink: "/about",
  imageUrl: "/images/candidate-portrait.jpg",
  imageAlt: "A portrait of the candidate",
};