export type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Temperature = "Hot" | "Cold";

export type PopularProduct = {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  temperatures: Temperature[];
};
