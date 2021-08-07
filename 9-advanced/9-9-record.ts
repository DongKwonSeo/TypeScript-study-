type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "cotact";

const nav: Record<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  cotact: { title: "dsd" },
};


// Recodr <1:객체의 키가 된다 ,2:value 된다 >