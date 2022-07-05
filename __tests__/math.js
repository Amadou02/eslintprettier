// describe permet de grouper des tests dans un scenario
describe('Math test', () => {
    // it ==> alias de test
    it('should calc sum', () => {
        const a = 2 + 2;
        expect(a).toEqual(4);
    });
});
