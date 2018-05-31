import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require("node-fetch");

import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists
} from "../src/SpotWraper/main";

describe("Spotify Wraper", () => {
  //smoke
  describe("Smoke", () => {
    it("should exists search method", () => {
      expect(search).to.exist;
    });

    it("should exists searchArtists method", () => {
      expect(searchArtists).to.exist;
    });

    it("should exists searchAlbuns method", () => {
      expect(searchAlbuns).to.exist;
    });

    it("should exists searchTracks method", () => {
      expect(searchTracks).to.exist;
    });
    it("should exists searchPlaylists method", () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe("Generic Search", () => {
    it("should call fetch function", () => {
      const fetch = sinon.stub(global, "fetch");
      const artists = search();

      expect(fetch).to.have.been.calledOnce;
    });
  });
});
