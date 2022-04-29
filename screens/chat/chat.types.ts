export interface ChatProps {
  name: string;
  photo_url: string;
  message: string;
  id: number | string;
}

export interface MessageProps {
  content: string;
  driver_id: number;
  from_type: string;
  id: number;
  producer_id: number

}
