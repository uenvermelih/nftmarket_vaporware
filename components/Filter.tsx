import React from "react";
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { useContract, useNFT } from "@thirdweb-dev/react";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";




function Filter() {

    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFT(contract);

    

    const [checkedItems, setCheckedItems] = React.useState([false, false])
  
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    const handleCheckboxChange = (index, isChecked) => {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = isChecked;
      setCheckedItems(newCheckedItems);
    };
  
  
    return (
      <>


        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([handleCheckboxChange, e.target.checked])}
        >
         {data?.metadata.attributes[0].trait_type}
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          >
            Green
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Blue
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Purple
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Red
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Pink
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Yellow
          </Checkbox>
        </Stack>


        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        >
         {data?.metadata.attributes[1].trait_type}
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          >
            Open
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Partial Bottom
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Partial Top
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Skew Gold
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Skew
          </Checkbox>
        </Stack>


        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        >
         {data?.metadata.attributes[2].trait_type}
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          >
            Open
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Partial Bottom
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Partial Top
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Skew Gold
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Skew
          </Checkbox>
        </Stack>

        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        >
         {data?.metadata.attributes[3].trait_type}
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          >
            Sad
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Smile Huge
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Smile Skew Huge
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Smile Skew Huge Gold
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Smile Skew
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Smile
          </Checkbox>
        </Stack>


      </>
    )
  }

  export default Filter;