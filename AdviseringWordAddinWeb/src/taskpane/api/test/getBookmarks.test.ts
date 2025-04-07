describe('getBookmarks', () => {

  const documentConfig = {
    propertiesMapper: [
      { documentPropertyName: 'property1', documentPropertyTag: 'tag1' },
      { documentPropertyName: 'property2', documentPropertyTag: 'tag2' }
    ]
  }

  test('is delicious', () => {
      expect(documentConfig.propertiesMapper.length).toBeGreaterThan(0);
    });
});