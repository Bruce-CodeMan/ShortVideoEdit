/*
 * @Date: 2023-08-23 17:41:03
 * @Author: Bruce Hsu
 * @Description: 
 */

// 视频
export interface IMessage {
  title: string;
  url: string;
}

// 页码
export interface IPages {
  goToPage: (value: number) => void;
  showPrevious: boolean;
  pages: number;
  currentPage: number;
  showNext: boolean;
}

// 下拉框
export interface IListSelect {
  selected: any;
  setSelected: (value: any) => void;
  label: string;
  data: {id: number, name: string}[];
}