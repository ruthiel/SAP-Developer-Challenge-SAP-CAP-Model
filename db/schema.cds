using { managed, cuid  } from '@sap/cds/common';

namespace golf;

entity Rounds : cuid, managed {
  title      : String(111);
  enteredBy  : String(50);
  enteredAt  : Timestamp;
  holes      : Composition of many Holes;
}

entity Holes : cuid {
  round    : Association to Rounds;
  score    : Integer;
  par      : Integer;
  shots    : Composition of many Shots;
  result   : String;
}

entity Shots : cuid {
  hole  : Association to Holes;
}