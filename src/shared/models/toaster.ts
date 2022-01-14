export interface IToaster {
  message: string | null;
  onClose?: () => {};
  show: boolean;
  status: any;
}
