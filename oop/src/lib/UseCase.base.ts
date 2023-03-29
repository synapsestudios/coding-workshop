export interface UseCase<T = void> {
  execute: (props: T) => Promise<void>;
}
