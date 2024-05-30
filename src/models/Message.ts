export type RequestMessage = {
  title: string;
  body: string;
  click_action: string;
  image?: string;
};

export interface IFCMNotificationPayloadProps {
  token: string;
  data: {
    title: string;
    body: string;
    image?: string;
    click_action: string;
  };
}
