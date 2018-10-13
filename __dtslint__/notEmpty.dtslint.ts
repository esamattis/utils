import {notEmpty} from "../src/notEmpty";

const withNulls: (string | null | undefined)[] = [];

// $ExpectType string[]
const noNulls = withNulls.filter(notEmpty);
