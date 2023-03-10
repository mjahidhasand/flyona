import "./globals.css";

export const metadata = {
  title: "Flyona",
  description: "Flyona is your one-stop travel solution for air ticket and hotel booking and more. We're here to simplify the travel process and make your trips more enjoyable. Whether you're planning a romantic getaway, a family vacation, or a business trip, Flyona has got you covered. With just a few clicks, you can easily book flights, hotels, and other travel essentials in one place. Plus, our user-friendly platform and 24/7 customer support make travel planning a breeze. So why wait? Book your next 			  adventure with Flyona today!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;