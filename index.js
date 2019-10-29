module.exports = main;

function main(indexes = "") {
  if (!Array.isArray(indexes)) {
    indexes = indexes.trim().split("\n");
  }
  const set = indexes.reduce((acc, indexdef) => {
    const { columns, table } = indexdefToObj(indexdef);
    columns.forEach(column => acc.add(`${table}.${column}`));
    return acc;
  }, new Set());

  return [...set].sort().join("\n");
}

function indexdefToObj(indexdef) {
  const re = /^([A-Z\s].*) (.*?) ON (.*?) USING btree \((.*?)\)$/;
  const [, type, name, table, columns] = indexdef.trim().match(re);
  return {
    type,
    name,
    table: table.replace("public.", ""),
    columns: columns.replace(/\s+/g, "").split(",")
  };
}
