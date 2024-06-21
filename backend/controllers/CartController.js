import Carts from "../models/Carts.js";
import CartItems from "../models/CartItems.js";
import Courses from "../models/Courses.js";

export const CreateCart = async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    let cart = await Carts.findOne({
      where: { userId },
    });

    if (!cart) cart = await Carts.create({ userId });

    const existingCartItem = await CartItems.findOne({
      where: {
        cartId: cart.id,
        courseId,
      },
    });

    if (existingCartItem)
      return res.status(400).json({ msg: "Course is already in the cart" });

    const cartItem = await CartItems.create({
      cartId: cart.id,
      courseId,
      addedDate: new Date(),
    });

    res.status(201).json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const ViewCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Carts.findOne({
      where: { userId },
      include: [
        {
          model: CartItems,
          as: "items",
          include: [
            {
              model: Courses,
              as: "course",
              attributes: ["id", "title", "description", "price"],
            },
          ],
        },
      ],
    });

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const DeleteAllCartItem = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Carts.findOne({ where: { userId } });

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    await CartItems.destroy({ where: { cartId: cart.id } });

    const remainingItems = await CartItems.count({
      where: { cartId: cart.id },
    });

    if (remainingItems === 0) {
      await cart.destroy();
    }

    res.status(200).json({ msg: "All cart items deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const DeleteCartItemById = async (req, res) => {
  const { itemId } = req.params;

  try {
    const cartItem = await CartItems.findByPk(itemId);

    if (!cartItem) {
      return res.status(404).json({ msg: "Cart item not found" });
    }

    const cartId = cartItem.cartId;

    await cartItem.destroy();

    const remainingItems = await CartItems.count({ where: { cartId } });

    if (remainingItems === 0) {
      await Carts.destroy({ where: { id: cartId } });
    }

    res.status(200).json({ msg: "Cart item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
