export interface PresentationCard {
    iconPath: string;
    content?: string;
}
export type PresentationCardListProps = {
    presentationCards: PresentationCard[];
};
