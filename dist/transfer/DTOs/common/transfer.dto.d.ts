export interface Transfer {
    id: number;
    sender: Sender;
    receiver: Receiver;
    amount: Amount;
    date: Date;
}
export interface TransferInput {
    sender: Sender;
    receiver: Receiver;
    amount: Amount;
}
export interface Sender {
    accountNumber: string | number;
    name: string;
}
export interface Receiver {
    accountNumber: string | number;
    name: string;
}
export type Amount = {
    value: number;
    currency?: string;
};
