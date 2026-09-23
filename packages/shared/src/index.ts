export const MIN_PLAYERS=4,MAX_PLAYERS=10;
export type Phase='LOBBY'|'ROLE_REVEAL'|'CLUE_GIVING'|'DISCUSSION'|'VOTING'|'RESULT';
export type Role='CREW'|'IMPOSTOR';
export interface PublicPlayer{id:string;name:string;score:number;connected:boolean;isHost:boolean;}
export interface Clue{playerId:string;playerName:string;text:string;}
export interface PublicResult{crewWon:boolean;impostorName:string;mostVotedName:string|null;votes:number;}
export interface PublicRoom{code:string;hostPlayerId:string;players:PublicPlayer[];phase:Phase;roundNumber:number;clues:Clue[];currentPlayerId:string|null;phaseEndsAt:number|null;result:PublicResult|null;}
export interface PersonalState extends PublicRoom{self:{id:string;name:string;role:Role|null;secretWord:string|null;hasVoted:boolean};}
export const WORDS=['volcano','piano','library','spaceship','rainbow','detective','popcorn','castle','penguin','thunder','jungle','robot','pancake','museum','guitar','desert','submarine','fireworks','dragon','lighthouse'];
