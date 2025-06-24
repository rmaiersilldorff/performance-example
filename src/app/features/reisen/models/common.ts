import { AngebotDetailsDto, PageDtoAngebotDetailsDto } from "@reisen/api";

export function mapToReiseResult(pageDto: PageDtoAngebotDetailsDto): ReiseResult {
  const elements: Reise[] = mapToReiseList(pageDto.elements);
  return {
    elements,
    totalCount: pageDto.totalCount,
  };
}

export function mapToReiseList(elements: AngebotDetailsDto[]): Reise[] {
    return elements.map((angebot: AngebotDetailsDto) => ({
        ...angebot,
        from: new Date(angebot.from),
        to: new Date(angebot.to),
    }));
}

export type Reise = Omit<AngebotDetailsDto, 'from' | 'to'> & {
  from: Date;
  to: Date;
};


export interface ReiseResult {
  elements: Reise[];
  totalCount: number;
}

export interface Basket {
    items: Reise[];
}

