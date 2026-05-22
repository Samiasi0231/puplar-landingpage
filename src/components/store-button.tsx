interface StoreButtonProps {
  store?: "apple" | "google";
}

export function StoreButton({ store = "apple" }: StoreButtonProps) {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition hover:scale-[1.02]"
    >
      <img
        src={
          store === "apple"
            ? "https://res.cloudinary.com/dwvspurak/image/upload/v1779443116/utilities/app-store/Download_on_the_App_Store_Badge_jdee9m.svg"
            : "https://res.cloudinary.com/dwvspurak/image/upload/v1779443233/utilities/app-store/Google_Play_Store_badge_EN_o7gu24.svg"
        }
        alt={
          store === "apple"
            ? "Download on the App Store"
            : "Get it on Google Play"
        }
        className="h-6 w-auto object-contain"
      />
    </a>
  );
}
