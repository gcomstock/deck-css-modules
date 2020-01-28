import React from 'react';
import styles from './Filters.module.css';


export default class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isOpen) {
      return null
    }

    return (
      <div className={styles.Filters}>
        <div className={styles.content}>
          <div className={styles.scrolly}>

            <div className={styles.facetTitle}>
              status level
            </div>

            <div className={styles.facet}>
              <div className={styles.facetCheckbox}></div>
              <div className={styles.facetName}>Facet</div>
            </div>

            <div className={styles.facet}>
              <div className={styles.facetCheckbox}></div>
              <div className={styles.facetName}>Facet</div>
            </div>

            <div className={styles.facet}>
              <div className={styles.facetCheckbox}></div>
              <div className={styles.facetName}>Facet</div>
            </div>

            <div className={styles.facet}>
              <div className={styles.facetCheckbox}></div>
              <div className={styles.facetName}>Facet</div>
            </div>

            <div className={styles.facet}>
              <div className={styles.facetCheckbox}></div>
              <div className={styles.facetName}>Facet</div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
