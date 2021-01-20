import { isLeft } from "fp-ts/lib/Either";
import * as io from "io-ts";
import reporter from "io-ts-reporters";

/**
 * iodecode will validate an object given an io-ts object spec; throwing an error if the object
 * does not match the spec, with a human friendly error message. This is an escape hatch of sorts
 * to get out of io-ts/fp-ts's functional semantics and back to a more traditional nodejs procedural
 * paradigm.
 * 
 * @param spec the io-ts object specification
 * @param obj the object to validate
 */
export function iodecode<T extends io.TypeC<any>>(spec: T, obj: any): io.TypeOf<T> {
  const result = spec.decode(obj);
  if (isLeft(result)) {
    throw new Error(reporter.report(result)[0]);
  }
  return result.right;
}
