import * as io from "io-ts";
/**
 * iodecode will validate an object given an io-ts object spec; throwing an error if the object
 * does not match the spec, with a human friendly error message. This is an escape hatch of sorts
 * to get out of io-ts/fp-ts's functional semantics and back to a more traditional nodejs procedural
 * paradigm.
 *
 * @param spec the io-ts object specification
 * @param obj the object to validate
 */
export declare function iodecode<T extends io.TypeC<any>>(spec: T, obj: any): io.TypeOf<T>;
