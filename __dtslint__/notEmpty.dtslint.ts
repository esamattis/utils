import {notEmpty} from "../src/noEmpty";

const withNulls: (string | null | undefined)[] = [];

// $ExpectType string[]
const noNulls = withNulls.filter(notEmpty);
