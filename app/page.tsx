import RedirectParent from "./cfp/_components/redirect-parent";

export async function generateMetadata() {
  return {
    alternates: {
      canonical: `https://sitcon.org/`,
    },
  };
}

export default function Page() {
  return (
    <div>
      <RedirectParent />
    </div>
  );
}
