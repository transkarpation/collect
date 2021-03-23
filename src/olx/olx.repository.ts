import { EntityRepository, Repository } from "typeorm";
import { Olx } from "./olx.entity";

@EntityRepository(Olx)
export class OlxRepository extends Repository<Olx> {

} 