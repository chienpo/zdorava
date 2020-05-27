import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import { PortfolioItemModel } from "../../../../../models/portfolio-item.model";
import {PORTFOLIO_IMAGES_PATH, SITE_URL} from "../../../../constants/site";
import {
  Item,
  ItemDescription,
  ItemFigure,
  ItemImage,
  ItemLabel,
  ItemName,
  ItemOrientationType
} from "./styled";

export const PortfolioItem: React.FC<PortfolioItemModel> = ({
   onItemClick,
   className,
   category,
   imageSrc,
   alt,
   name,
   description
}) => (
  <Item
    className={className}
    onClick={onItemClick}
  >
    <ItemOrientationType>
      <ItemFigure>
        <ItemImage
          src={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${category}/${imageSrc}`}
          alt={alt}
          width="400px"
        />
      </ItemFigure>
      <ItemLabel>
        <FontAwesomeIcon icon={faImage} />
        <ItemName>
          {name}
        </ItemName>
      </ItemLabel>
      <ItemDescription>
        {description}
      </ItemDescription>
    </ItemOrientationType>
  </Item>
)
