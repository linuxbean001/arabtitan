export interface ButtonData{
    text:string;
    link:string;
  }

export interface BannerData{
  image: string;
  heading: string;
  subheading?: string;
  buttons?: ButtonData[];
}

export interface HeaderBanner {
  bannerData:BannerData[];
  subPage?:boolean;
  stepper?:boolean;
}


