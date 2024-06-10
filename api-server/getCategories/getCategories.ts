import config from "@/config/config";
import { getTranslations } from "next-intl/server";
import { Category } from "./types";

const mockData: Category[] = [
  {
    id: "1",
    url: "/travel",
    title: "Categories.travel",
    icon: config.baseUrl + "/icons/plane.svg",
  },
  {
    id: "2",
    url: "/tpl",
    title: "Categories.tpl",
    icon: config.baseUrl + "/icons/car.svg",
  },
  {
    id: "3",
    url: "/student",
    title: "Categories.student",
    icon: config.baseUrl + "/icons/books.svg",
  },
  {
    id: "4",
    url: "/health",
    title: "Categories.health",
    icon: config.baseUrl + "/icons/health.svg",
  },
  {
    id: "5",
    url: "/kids",
    title: "Categories.kids",
    icon: config.baseUrl + "/icons/kids.svg",
  },
  {
    id: "6",
    url: "/casco",
    title: "Categories.casco",
    icon: config.baseUrl + "/icons/car-broken.svg",
  },
  {
    id: "7",
    url: "7property",
    title: "Categories.property",
    icon: config.baseUrl + "/icons/house.svg",
  },
  {
    id: "8",
    url: "/business",
    title: "Categories.business",
    icon: config.baseUrl + "/icons/plot.svg",
  },
  {
    id: "9",
    url: "/border",
    title: "Categories.border",
    icon: config.baseUrl + "/icons/planet.svg",
  },
  {
    id: "10",
    url: "/earthquake",
    title: "Categories.earthquake",
    icon: config.baseUrl + "/icons/earthquake.svg",
  },
];

const getCategories = async (): Promise<Category[]> => {
  const t = await getTranslations("Common");

  const dataFormatted: Category[] = [];

  for (const item of mockData) {
    dataFormatted.push({
      ...item,
      title: t(item.title),
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataFormatted);
    }, 500);
  });
};

export default getCategories;
