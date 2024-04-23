import { TransferService } from '../services/transfer.service';
export declare class TransferController {
    private readonly transferService;
    constructor(transferService: TransferService);
    findAll(): any[];
    findOne(id: string): any;
    create(transfer: any): any;
    update(id: string, transfer: any): any;
    remove(id: string): any;
}
