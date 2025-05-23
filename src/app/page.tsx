import ListingCard from "@/components/ListingCard";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 flex items-center justify-center">
      <ListingCard
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        title="Modern Family Home"
        price="$500,000"
        location="Los Angeles, CA"
        description="A beautiful and modern home perfect for families. Includes a large backyard and pool."
      />
    </main>
  );
}
