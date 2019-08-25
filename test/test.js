const expect = require("chai").expect;
const differ = require("./../index.js");

describe("Nothing to patch", () => {
    it("should return an empty object", async () => {

        let orig = {
            bol: true,
            nonething: undefined,
            update: 'no'
        }
        let patch = {
            update: 'no'
        }

        let result = {}
        differ(orig, patch, result);

        expect(result).to.eql({});
    });
});

describe("Object with a prop containing array", () => {
    it("should update the array contents", async () => {

        let orig = {
            name: '',
            files: []
        }
        let patch = {
            name: '',
            files: [
                'foo'
            ]
        }

        let result = {}
        differ(orig, patch, result);

        expect(result).to.eql({
            files: [
                'foo'
            ]
        });
    });
});

describe("Object with a prop containing array of objects", () => {
    it("should update the innermost objects", async () => {

        let orig = {
            documents: [
                {
                    name: 'profilePic',
                    files: []
                }
            ]
        }
        let patch = {
            documents: [
                {
                    name: 'profilePic',
                    files: [
                        {
                            name: 'file.jpeg'
                        }
                    ]
                }
            ]
        }

        let result = {}
        differ(orig, patch, result);

        expect(result).to.eql({
            documents: [
                {
                    files: [
                        {
                            name: 'file.jpeg'
                        }
                    ]
                }
            ]
        });
    });
});

describe("Prop present on orig but not on patch is ignored", () => {
    it("should update the innermost objects", async () => {

        let orig = {
            bol: true, // ignored
            updateMe: ''
        }
        let patch = {
            updateMe: 'yes!'
        }

        let result = {}
        differ(orig, patch, result);

        expect(result).to.eql({
            updateMe: 'yes!'
        });
    });
});