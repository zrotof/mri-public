export interface BlogRubic {
    id: number,
    full_name: string,
    short_name: string,
    isActive: boolean
}

export interface BlogArticle {
  id: number;
  image_url: string;
  title: string;
  publish_date: Date;
  reading_time_minutes: number;
  category: string;
}