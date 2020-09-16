export enum BuyerRole {
    interestedBuyer = 1,
    qualifiedBuyer,
    bannedBuyer,
}


export const BuyerRoles = [
  {id: BuyerRole.interestedBuyer, name: 'InterestedBuyer'},
  {id: BuyerRole.qualifiedBuyer, name: 'QualifiedBuyer'},
  {id: BuyerRole.bannedBuyer, name: 'BannedBuyer'},
];
