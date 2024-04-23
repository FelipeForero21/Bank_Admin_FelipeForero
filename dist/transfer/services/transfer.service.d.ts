export declare class TransferService {
    private transfers;
    findAll(): any[];
    findOne(id: number): any;
    create(transfer: any): any;
    update(id: number, transfer: any): any;
    remove(id: number): any;
    private generateId;
}
