export enum DealStatus {
    draft = 0,
    active,
    closing,
    closed,
    public,
    negotiation

}

export const DealStatuses = [
  {id: DealStatus.draft, name: 'Draft'},
  {id: DealStatus.active, name: 'Active'},
  {id: DealStatus.public, name: 'Public'},
  {id: DealStatus.closing, name: 'Closing'},
  {id: DealStatus.closed, name: 'Closed'},
];
