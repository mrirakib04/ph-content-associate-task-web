import BreakingNews from "./../components/home/BreakingNews";
import HeroSection from "./../components/home/HeroSection";
import CategoryTabs from "./../components/home/CategoryTabs";
import SaradeshMap from "./../components/home/SaradeshMap";
import VideoGallery from "./../components/home/VideoGallery";
import Newsletter from "./../components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
      <BreakingNews></BreakingNews>
      <HeroSection></HeroSection>
      <CategoryTabs></CategoryTabs>
      <SaradeshMap></SaradeshMap>
      <VideoGallery></VideoGallery>
      <Newsletter></Newsletter>
    </div>
  );
}
