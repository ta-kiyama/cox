export declare type CoxObject<T extends string, U extends Function, V extends Array<any>, W = any, X extends boolean = false, Y extends boolean = false> = {
  type: T,
  callback: U,
  args: V,
  thisArg: T extends "call" | "chain" | "raw" ? W : undefined,
  isAsync: X,
  isError: Y,
};

/**
 * this無指定のシンプルな関数をプロキシします
 * @param callback プロキシ対象となる関数
 * @param ...args 関数を実行する際に渡す引数
 * @return CoxObject
 */
declare function cox<T>(callback: () => T): CoxObject<"cox", () => T, []>;
declare function cox<T, P1>(callback: (p1: P1) => T, p1: P1): CoxObject<"cox", (p1: P1) => T, [P1]>;
declare function cox<T, P1, P2>(callback: (p1: P1, p2: P2) => T, p1: P1, p2: P2): CoxObject<"cox", (p1: P1, p2: P2) => T, [P1, P2]>;
declare function cox<T, P1, P2, P3>(callback: (p1: P1, p2: P2, p3: P3) => T, p1: P1, p2: P2, p3: P3): CoxObject<"cox", (p1: P1, p2: P2, p3: P3) => T, [P1, P2, P3]>;
declare function cox<T, P1, P2, P3, P4>(callback: (p1: P1, p2: P2, p3: P3, p4: P4) => T, p1: P1, p2: P2, p3: P3, p4: P4): CoxObject<"cox", (p1: P1, p2: P2, p3: P3, p4: P4) => T, [P1, P2, P3, P4]>;

declare namespace cox {
  /**
    * this指定のシンプルな関数をプロキシします
    * @param callback プロキシ対象となる関数
    * @param thisArg 関数を実行する際のthisの値
    * @param ...args 関数を実行する際に渡す引数
    * @return CoxObject
    */
  function $call<T, U>(callback: (this: U) => T, thisArg: U): CoxObject<"call", (this: U) => T, [], U>;
  function $call<T, U, P1>(callback: (this: U, p1: P1) => T, thisArg: U, p1: P1): CoxObject<"call", (this: U, p1: P1) => T, [P1], U>;
  function $call<T, U, P1, P2>(callback: (this: U, p1: P1, p2: P2) => T, thisArg: U, p1: P1, p2: P2): CoxObject<"call", (this: U, p1: P1, p2: P2) => T, [P1, P2], U>;
  function $call<T, U, P1, P2, P3>(callback: (this: U, p1: P1, p2: P2, p3: P3) => T, thisArg: U, p1: P1, p2: P2, p3: P3): CoxObject<"call", (this: U, p1: P1, p2: P2, p3: P3) => T, [P1, P2, P3], U>;

  /**
   * クラス関数に対してインスタンスをnewしつつプロキシします
   * @param callback プロキシ対象となるクラス関数
   * @param ...args クラス関数を実行する際に渡すコンストラクタ引数
   * @return CoxObject
   */
  function $new<T>(callback: () => T): CoxObject<"new", () => T, []>;
  function $new<T, P1>(callback: (p1: P1) => T, p1: P1): CoxObject<"new", (p1: P1) => T, [P1]>;
  function $new<T, P1, P2>(callback: (p1: P1, p2: P2) => T, p1: P1, p2: P2): CoxObject<"new", (p1: P1, p2: P2) => T, [P1, P2]>;
  function $new<T, P1, P2, P3>(callback: (p1: P1, p2: P2, p3: P3) => T, p1: P1, p2: P2, p3: P3): CoxObject<"new", (p1: P1, p2: P2, p3: P3) => T, [P1, P2, P3]>;
  function $new<T, P1, P2, P3, P4>(callback: (p1: P1, p2: P2, p3: P3, p4: P4) => T, p1: P1, p2: P2, p3: P3, p4: P4): CoxObject<"new", (p1: P1, p2: P2, p3: P3, p4: P4) => T, [P1, P2, P3, P4]>;

  /**
   * 任意の値をtapしてプロキシします
   * @param callback 同期Generatorもしくは非同期Generator
   * @return CoxObject
   */
  function $raw<T>(arg: T): CoxObject<"raw", undefined, [], T>;

  export {
    $call as call,
    $new as new,
    $raw as raw,
  }
}

export default cox;