"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iodecode = void 0;
const Either_1 = require("fp-ts/lib/Either");
const io_ts_reporters_1 = require("io-ts-reporters");
/**
 * iodecode will validate an object given an io-ts object spec; throwing an error if the object
 * does not match the spec, with a human friendly error message. This is an escape hatch of sorts
 * to get out of io-ts/fp-ts's functional semantics and back to a more traditional nodejs procedural
 * paradigm.
 *
 * @param spec the io-ts object specification
 * @param obj the object to validate
 */
function iodecode(spec, obj) {
    const result = spec.decode(obj);
    if (Either_1.isLeft(result)) {
        throw new Error(io_ts_reporters_1.default.report(result)[0]);
    }
    return result.right;
}
exports.iodecode = iodecode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9kZWNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW90cy9pb2RlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMEM7QUFFMUMscURBQXVDO0FBRXZDOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsUUFBUSxDQUEwQixJQUFPLEVBQUUsR0FBUTtJQUNqRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN0QixDQUFDO0FBTkQsNEJBTUMifQ==