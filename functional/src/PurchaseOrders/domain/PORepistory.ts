import { IPORepository } from "./IPORepository";

class PORepository implements IPORepository {}
export const constructPORepository = () => new PORepository();
