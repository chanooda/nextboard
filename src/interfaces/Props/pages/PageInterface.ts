import { IBoard, IPost } from "../data/dataInterface";

export interface IHomeProps {
  boards: IBoard[];
  changeHeader?: () => void;
}
export interface IBoardProps {
  board: IBoard;
  write: boolean;
  onClick?: () => void;
  ispost?: boolean;
}

export interface IPostProps {
  post: IPost;
}
