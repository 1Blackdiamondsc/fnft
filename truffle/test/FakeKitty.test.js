const TheBoredApesFNFT= artifacts.require("TheBoredApesFNFT.sol");

contract('THEBOREDAPESFNFT', async (accounts) => {

	let babyapes;

	beforeEach(async () => {
		TheBoredApesFNFT = await TheBoredApesFNFT.new();
	});

	it("creates uri", async () => {
		await TheBoredApesFNFT.mint(18);
		assert.equal("https://d1iczm3wxxz9zd.cloudfront.net/2597b886-5b20-44bd-ad3a-bddde842a458/000000-0000000000/11529368692910206949989499695970252420985560916471671966680266623018420295571/ITEM_PREVIEW1.png", await TheBoredApesFNFT.tokenURI(18));
	});

});
