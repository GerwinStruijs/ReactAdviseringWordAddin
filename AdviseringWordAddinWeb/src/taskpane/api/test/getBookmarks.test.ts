


















//import { getBookmarks } from "./getBookmarks";
//import { bookmarkMap } from "../config/config";
//import { describe, it } from "node:test";

//// Mock the Word API
//const mockWord = {
//    run: jest.fn((callback) => {
//        const context = {
//            document: {
//                getBookmarkRangeOrNullObject: jest.fn((bookmarkName) => {
//                    return {
//                        bookmarkName,
//                        isNullObject: bookmarkName === "invalidBookmark",
//                        load: jest.fn(),
//                    };
//                }),
//            },
//            sync: jest.fn(),
//        };
//        return callback(context);
//    }),
//};

//(global as any).Word = mockWord;

//describe("getBookmarks", () => {
//    it("should return an array of bookmark names", async () => {
//        const bookmarkMapper: bookmarkMap[] = [
//            { bookmarkName: "bookmark1" },
//            { bookmarkName: "bookmark2" },
//            { bookmarkName: "invalidBookmark" },
//        ];

//        const result = await getBookmarks(bookmarkMapper);

//        expect(result).toEqual(["bookmark1", "bookmark2"]);
//        expect(mockWord.run).toHaveBeenCalled();
//        expect(mockWord.run.mock.calls[0][0]).toBeInstanceOf(Function);
//    });

//    it("should return an empty array if no valid bookmarks are found", async () => {
//        const bookmarkMapper: bookmarkMap[] = [
//            { bookmarkName: "invalidBookmark" },
//        ];

//        const result = await getBookmarks(bookmarkMapper);

//        expect(result).toEqual([]);
//        expect(mockWord.run).toHaveBeenCalled();
//        expect(mockWord.run.mock.calls[0][0]).toBeInstanceOf(Function);
//    });
//});
