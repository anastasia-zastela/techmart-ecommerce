import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import ProductsItem from "../../components/common/ProductsItem/index";
import { Container, Grid, useMediaQuery } from "@material-ui/core";
import { useActions } from "../../hooks/useActions";
import NestedList from "../../components/common/ProductsMenu/index";
import ProductsPagination from "../../components/common/ProductsPagination/index";
import ProductsFilter from "../../components/common/ProductsFilter/index";
import PopUpFilter from "../../components/common/ProductsFilter/PopUpFilter/index";
import { productsFilter } from "../../redux/actions/productActions";
import { connect } from "react-redux";
import Loader from "../../components/common/Loader";

const Products = ({ productsList, loading }) => {
  const { listProducts } = useActions();

  const styles = useStyles();

  const is771 = useMediaQuery("(max-width: 776px)");
  const is856 = useMediaQuery("(max-width:856px)");

  const [colorValue, setColorValue] = useState([]);
  const getColorsItems = (event) => {
    event.target.checked
      ? setColorValue([...colorValue, event.target.id])
      : setColorValue(colorValue.filter((item) => item !== event.target.id));
  };
  const [brandValue, setBrandValue] = useState([]);
  const getBrandItems = (event) => {
    event.target.checked
      ? setBrandValue([...brandValue, event.target.id])
      : setBrandValue(brandValue.filter((item) => item !== event.target.id));
  };

  const [categoriesVale, setCategories] = useState([]);
  const getCategoriesItems = (event) => {
    event.target.checked
      ? setCategories([...categoriesVale, event.target.id])
      : setCategories(
          categoriesVale.filter((item) => item !== event.target.id)
        );
  };
  const [quantity, setQuantity] = useState({
    inStock: false,
    noInStock: false,
  });

  const [perPage, setPerPage] = useState(12);
  const [page, setPage] = useState(1);

  const maxValue = [...productsList].sort(
    (a, b) => b.currentPrice - a.currentPrice
  );

  const minValue = [...productsList].sort(
    (a, b) => a.currentPrice - b.currentPrice
  );
  const [value, setValue] = useState([
    !loading ? minValue[0].currentPrice : 14000,
    !loading ? maxValue[0].currentPrice : 41000,
  ]);

  const [sortedList, setSortedList] = useState(productsList);

  useEffect(() => {
    listProducts();
  }, []);

  useEffect(() => {
    setSortedList(productsList);
  }, [productsList]);

  if (loading) return <Loader />;

  const filteredArr = productsFilter(
    sortedList,
    colorValue,
    brandValue,
    categoriesVale,
    value[0],
    value[1],
    quantity
  );

  const itemsToRender = filteredArr
    .slice((page - 1) * perPage, page * perPage)
    .map((item) => (
      <ProductsItem
        id={item.itemNo}
        item={item}
        image={item.imageUrls[0]}
        name={item.name}
        category={item.categories}
        color={item.color}
        brand={item.brand}
        price={item.currentPrice}
        quantity={item.quantity}
        key={item.itemNo}
      />
    ));

  return (
    <Container maxWidth="xl" id="productsPage">
      <Grid
        className={styles.menuStyle}
        style={!is771 ? { justifyContent: "end" } : null}
      >
        {is771 ? (
          <PopUpFilter>
            <ProductsFilter
              productsList={productsList}
              value={value}
              setValue={setValue}
              maxValue={maxValue}
              minValue={minValue}
              colorValue={colorValue}
              setColorValue={setColorValue}
              getColorsItems={getColorsItems}
              quantity={quantity}
              setQuantity={setQuantity}
              getBrandItems={getBrandItems}
              getCategoriesItems={getCategoriesItems}
            />
          </PopUpFilter>
        ) : null}
        <NestedList productsList={sortedList} setSortedList={setSortedList} />
      </Grid>
      <Grid className={styles.productsMainWrapper}>
        <Grid item sx="1">
          {!is771 ? (
            <ProductsFilter
              productsList={productsList}
              value={value}
              setValue={setValue}
              maxValue={maxValue}
              minValue={minValue}
              colorValue={colorValue}
              setColorValue={setColorValue}
              getColorsItems={getColorsItems}
              quantity={quantity}
              setQuantity={setQuantity}
              getBrandItems={getBrandItems}
              getCategoriesItems={getCategoriesItems}
            />
          ) : null}
        </Grid>
        <div style={{ marginTop: "7px" }}>
          <Grid
            container
            spacing={2}
            sx="2"
            className={is856 ? styles.producstAdaptive : null}
          >
            {itemsToRender}
          </Grid>
        </div>
      </Grid>
      <Grid>
        <ProductsPagination
          perPage={perPage}
          page={page}
          setPage={setPage}
          filteredArr={filteredArr}
        />
      </Grid>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  productsList: state.productList.products,
  loading: state.productList.loading,
});
export default connect(mapStateToProps)(Products);
