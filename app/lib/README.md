# Library Utilities

Dieses Verzeichnis enthält wiederverwendbare Utility-Funktionen und Konstanten für den Jahreskalender.

## Dateien

### `constants.ts`
Enthält alle Konstanten der Anwendung:
- `MONTH_NAMES`: Array mit deutschen Monatsnamen
- `CALENDAR_YEAR`: Das Jahr des Kalenders (2026)
- `TOTAL_DAYS`: Anzahl der Tage (365)

### `dateUtils.ts`
Hilfsfunktionen für Datum-Operationen:
- `getTodayString()`: Gibt das heutige Datum als YYYY-MM-DD String zurück
- `isUnlocked(unlockDate, today?)`: Prüft ob ein Tag freigeschaltet ist
- `getCurrentMonth()`: Gibt den aktuellen Monat (1-12) zurück

### `seasonColors.ts`
Dynamische Farbschemata basierend auf Jahreszeiten:
- `getSeasonColors(month)`: Gibt das Farbschema für einen Monat zurück
  - Frühling (März-Mai): Grün/Rosa/Gelb
  - Sommer (Juni-August): Gelb/Orange/Pink
  - Herbst (September-November): Orange/Rot/Bernstein
  - Winter (Dezember-Februar): Blau/Indigo/Lila

### `types.ts`
TypeScript Type Definitions:
- `Day`: Typ für einen Kalender-Tag
- `SeasonColors`: Typ für das Farb-Schema

## Nutzung

```typescript
import { MONTH_NAMES } from "./lib/constants";
import { getTodayString, isUnlocked } from "./lib/dateUtils";
import { getSeasonColors } from "./lib/seasonColors";
import type { Day, SeasonColors } from "./lib/types";
```
