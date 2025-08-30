import UploadForm from "@/components/upload/UploadForm";
import UploadHeader from "@/components/upload/UploadHeader";
export default function page() {
  return (
    <section className="min-h-screen">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <UploadHeader/>
        <UploadForm/>
      </div>
    </section>
  );
}
